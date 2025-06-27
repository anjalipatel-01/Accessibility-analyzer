import ColorContrastChecker from "color-contrast-checker";
const ccc = new ColorContrastChecker();
export function runAccessibilityChecks($){
    //acessibility checks
    //missing alt text
    $('img').each((i,el)=>{
        if(!$(el).attr("alt")){
            issues.push({
                type: "Missing alt attribute",
                severity: "critical",
                element: $.html(el),
                message: "Image element is missing an alt attribute, which is important for screen readers.",
                suggestion: "Add a descriptive alt text to the image, e.g., alt='Logo of the company'.",
            });
        }
    });

    //inconsistent heading structure 
    let lastlevel = 0;
    $('h1,h2,h3,h4,h5,h6').each((i,el)=>{
        const tag = el.tagName.toLowerCase();
        const level = parseInt(tag[1]);
        if(lastlevel && level - lastlevel >1){
            issues.push({
                type: "Improper heading structure",
                severity: "moderate",
                element: $.html(el),
                message: `Skipped heading level from h${lastLevel} to h${level}`,
                suggestion: `Use proper heading levels in order`,
            });
        }
    });

    //aria label in elements
    $('button, a,[role="button"],[role="link"]').each((i,el)=>{
        const hastext = $(el).text().trim().length > 0;
        const haslabel = $(el).attr('aria-label')|| $(el).attr('aria-labelledby');

        if(!hastext && !haslabel){
            issues.push({
                 type: "Missing ARIA label",
                severity: "critical",
                element: $.html(el),
                message: "Interactive element has no text or ARIA label.",
                suggestion: "Add aria-label or aria-labelledby to describe the element.",
            });
        }
    });

    //missing label for html elements

    $('input,select,texrtarea').each((i,el)=>{
        const id = $(el).attr('id');
        const hasArialabel = $(el).attr('aria-label')|| $(el).attr('aria-labelledby');
        const isWrappedINLabel = $(el).closest('label').length>0;

        let haslabel = false;
        if(id){
            haslabel = $(`label[for="{id}"]`).length > 0;
        }

        if(!hasArialabel && !isWrappedINLabel && !haslabel){
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
    $('html').each((i,el)=>{
        const hasattr = $(el).attr('lang');
        if(!hasattr){
            issues.push({
                type: "Missing language attribute",
                severity: "moderate",
                element: $.html(el),
                message: "<html> tag is missing a 'lang' attribute.",
                suggestion: "Add a lang attribute like <html lang='en'> to specify the document's language.",
            });
        }
    });
    
}