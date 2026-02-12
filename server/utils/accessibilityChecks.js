import ColorContrastChecker from "color-contrast-checker";
const ccc = new ColorContrastChecker();
export function runAccessibilityChecks($) {
    //acessibility checks

    const ccc = new ColorContrastChecker();
    const issues = [];

    //color contrast checker 
    $('[style]').each((i, el) => {
        const $el = $(el);
        const style = $el.attr('style');
        const styleMap = {};
        style.split(';').forEach((rule) => {
            const [property, value] = rule.split(':').map(s => s.trim());
            if (property && value) {
                styleMap[property.toLowerCase()] = value;
            }
        });

        const fg = styleMap['color'];
        const bg = styleMap['background-color'];

        if (fg && bg && /^#[0-9a-fA-F]{3,6}$/.test(fg) && /^#[0-9a-fA-F]{3,6}$/.test(bg)) {
            const ratio = ccc.getContrastRatio(fg, bg);
            const passesAA = ccc.isLevelAA(fg, bg, 14);

            if (!passesAA) {
                issues.push({
                    type: "Low color contrast",
                    severity: "high",
                    element: $.html(el),
                    message: `Text color ${fg} on background ${bg} has low contrast (ratio: ${ratio.toFixed(2)}).`,
                    suggestion: "Use a higher contrast color combination to improve readability."
                });
            }
        }
    });

    //missing alt text
    $('img').each((i, el) => {
        if (!$(el).attr("alt")) {
            issues.push({
                type: "Missing alt attribute",
                severity: "Critical",
                element: $.html(el),
                message: "Image element is missing an alt attribute, which is important for screen readers.",
                suggestion: "Add a descriptive alt text to the image, e.g., alt='Logo of the company'.",
            });
        }
    });

    //inconsistent heading structure 
    let lastlevel = 0;
    $('h1,h2,h3,h4,h5,h6').each((i, el) => {
        const tag = el.tagName.toLowerCase();
        const level = parseInt(tag[1]);
        if (lastlevel && level - lastlevel > 1) {
            issues.push({
                type: "Improper heading structure",
                severity: "Moderate",
                element: $.html(el),
                message: `Skipped heading level from h${lastlevel} to h${level}`,
                suggestion: `Use proper heading levels in order`,
            });
        }
    });

    //aria label in elements
    $('button, a,[role="button"],[role="link"]').each((i, el) => {
        const hastext = $(el).text().trim().length > 0;
        const haslabel = $(el).attr('aria-label') || $(el).attr('aria-labelledby');

        if (!hastext && !haslabel) {
            issues.push({
                type: "Missing ARIA label",
                severity: "Critical",
                element: $.html(el),
                message: "Interactive element has no text or ARIA label.",
                suggestion: "Add aria-label or aria-labelledby to describe the element.",
            });
        }
    });

    //missing label for html elements
    $('input,select,texrtarea').each((i, el) => {
        const id = $(el).attr('id');
        const hasArialabel = $(el).attr('aria-label') || $(el).attr('aria-labelledby');
        const isWrappedINLabel = $(el).closest('label').length > 0;

        let haslabel = false;
        if (id) {
            haslabel = $(`label[for="${id}"]`).length > 0;

        }

        if (!hasArialabel && !isWrappedINLabel && !haslabel) {
            issues.push({
                type: "Missing form label",
                severity: "critical",
                element: $.html(el),
                message: "Form control has no label or ARIA label.",
                suggestion: "Add a label using <label>, aria-label, or aria-labelledby.",
            });
        }
    });

    //missing language attribute
    $('html').each((i, el) => {
        const hasattr = $(el).attr('lang');
        if (!hasattr || hasattr.trim() === '') {
            issues.push({
                type: "Missing language attribute",
                severity: "Moderate",
                element: "<html>",
                message: "<html> tag is missing a 'lang' attribute.",
                suggestion: "Use <html lang=\"en\"> to specify the page language.",
            });
        }
    });

    //missing title attribute
    const head = $('head');
    const title = head.find('title');
    if (title.length === 0) {
        issues.push({
            type: "Missing title element",
            severity: "Critical",
            element: $.html(head),
            message: "The <head> section is missing a <title> tag.",
            suggestion: "Add a <title> tag inside <head> to describe the page's content."
        });
    } else {
        const titletext = title.text().trim();
        if (titletext === '') {
            issues.push({
                type: "Empty title element",
                severity: "Moderate",
                element: $.html(title),
                message: "The <title> tag is empty, which reduces accessibility and SEO.",
                suggestion: "Provide a short, descriptive title that reflects the page's purpose."
            });
        }
    };

    //tabindex

    $('[tabindex]').each((i, el) => {
        const $el = $(el);
        const tabidxval = parseInt($el.attr('tabindex'), 10);


        //if tabidx > 0
        if (tabidxval > 0) {
            issues.push({
                type: "Tabindex value too high",
                severity: "Moderate",
                element: $.html(el),
                message: `Element has tabindex="${tabidxval}", which can disrupt natural tab order.`,
                suggestion: "Avoid using tabindex > 0. Use tabindex='0' or let the element follow natural DOM order."
            })
        }

        //if tabidx = -1 on visible elements
        if (tabidxval === -1) {
            const ishidden = $el.css('display') === 'none' || $el.css('visibility') === 'hidden';
            if (!ishidden) {
                issues.push({
                    type: "Unreachable element",
                    severity: "Critical",
                    element: $.html(el),
                    message: `Element has tabindex="-1" but is visible, making it unreachable with keyboard navigation.`,
                    suggestion: "Avoid tabindex='-1' on visible elements unless managed by JavaScript for special interactions."
                });
            }
        }

        //redundant tabidx on focused elements

        const tag = el.tagName?.toLowerCase();
        const isfocusable = ['a', 'buttton', 'input', 'select', 'textarea'].includes(tag);

        if (tabidxval === 0 && isfocusable) {
            issues.push({
                type: "Redundant tabindex",
                severity: "Low",
                element: $.html(el),
                message: `<${tag}> element has tabindex="0", which is unnecessary.`,
                suggestion: `Remove tabindex="0" from <${tag}> — it is naturally keyboard focusable.`
            });
        }
    });

    //redundant aria labels 
    $('[aria-label]').each((i, el) => {
        const $el = $(el);
        const arialabel = $el.attr('aria-label')?.trim().toLowerCase();
        const visibletext = $el.text().trim().toLowerCase();

        if (arialabel && visibletext && arialabel === visibletext) {
            issues.push({
                type: "Redundant ARIA label",
                severity: "Low",
                element: $.html(el),
                message: `Element's 'aria-label' value is the same as its visible text, which is unnecessary.`,
                suggestion: `Remove the redundant 'aria-label'. Screen readers will already read the visible text.`
            });
        }
    });

    //descriptive text for links
    $('a').each((i, el) => {
        const $el = $(el);
        const linktext = $el.text().trim();
        const hasimg = $el.find('img').length > 0;
        let imgaltext = true;

        //alt text for images
        if (hasimg) {
            $el.find('img').each((j, img) => {
                if (!$(img).attr('alt') || $(img).attr('alt').trim() === '') {
                    imgaltext = false;
                }
            });
        }

        //no link text + no alt on img
        if (linktext === '' && (!hasimg || !imgaltext)) {
            issues.push({
                type: "Missing link text",
                severity: "Critical",
                element: $.html(el),
                message: `Link has no accessible text or alt text, making it unusable for screen readers.`,
                suggestion: `Add descriptive text inside the <a> tag, or provide alt text for any images inside the link.`
            })
        }

    })

    //readability issues 
    $('p').each((i, el) => {
        const $el = $(el);
        const text = $el.text().trim();

        if (!text) return;

        const sentences = text.split(/[.?!]\s+/); // basic sentence splitting

        sentences.forEach((sentence) => {
            const wordCount = sentence.split(/\s+/).length;
            const longWords = sentence.split(/\s+/).filter(word => word.length > 12);

            if (wordCount > 25) {
                issues.push({
                    type: "Readability issue",
                    severity: "Low",
                    element: $.html(el),
                    message: `This paragraph contains a long sentence (${wordCount} words), which may be difficult to read.`,
                    suggestion: "Break long sentences into shorter ones to improve readability."
                });
            }

            if (longWords.length > 3) {
                issues.push({
                    type: "Readability issue",
                    severity: "Low",
                    element: $.html(el),
                    message: `This paragraph contains several complex words (${longWords.length} words longer than 12 characters).`,
                    suggestion: "Try using simpler, shorter words where possible to make the text easier to understand."
                });
            }
        });
    });


    // -------------------------------------------------------------------------
    // NEW CHECKS
    // -------------------------------------------------------------------------

    // 1. Deprecated Link Targets (Security & Performance)
    $('a[target="_blank"]').each((i, el) => {
        const rel = $(el).attr('rel');
        if (!rel || !rel.includes('noopener') || !rel.includes('noreferrer')) {
            issues.push({
                type: "Unsafe link target",
                severity: "Moderate",
                element: $.html(el),
                message: "Links with target='_blank' should have rel='noopener noreferrer' to prevent security and performance issues.",
                suggestion: "Add rel='noopener noreferrer' to the link."
            });
        }
    });

    // 2. Input Autocomplete (WCAG 1.3.5)
    $('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]').each((i, el) => {
        const autocomplete = $(el).attr('autocomplete');
        if (!autocomplete) {
            issues.push({
                type: "Missing autocomplete attribute",
                severity: "Low",
                element: $.html(el),
                message: "Input field is missing an 'autocomplete' attribute, which helps users fill forms faster.",
                suggestion: "Add a valid autocomplete attribute (e.g., autocomplete='email' or 'current-password')."
            });
        }
    });

    // 3. Deprecated HTML Tags
    $('center, font, marquee, blink').each((i, el) => {
        const tag = el.tagName.toLowerCase();
        issues.push({
            type: "Deprecated HTML tag",
            severity: "Moderate",
            element: $.html(el),
            message: `The <${tag}> tag is deprecated and should not be used in modern HTML.`,
            suggestion: `Replace <${tag}> with CSS for styling (e.g., text-align: center, font-family).`
        });
    });


    // 4. Viewport Zoom (WCAG 1.4.4)
    $('meta[name="viewport"]').each((i, el) => {
        const content = $(el).attr('content');
        if (content && (content.includes('user-scalable=no') || content.includes('maximum-scale=1'))) {
            issues.push({
                type: "Restricted zoom",
                severity: "Critical",
                element: $.html(el),
                message: "Viewport meta tag prevents zooming (user-scalable=no), which locks out visually impaired users.",
                suggestion: "Remove 'user-scalable=no' and 'maximum-scale' from the viewport tag."
            });
        }
    });

    // 5. Video Captions (WCAG 1.2.2)
    $('video').each((i, el) => {
        const hasTrack = $(el).find('track[kind="captions"], track[kind="subtitles"]').length > 0;
        if (!hasTrack) {
            issues.push({
                type: "Missing video captions",
                severity: "Critical",
                element: $.html(el),
                message: "Video element is missing a <track> for captions or subtitles.",
                suggestion: "Add a <track kind='captions' src='...'> to the video element."
            });
        }
    });

    return issues;
}