import "../styles/navlinks.css";
export default function Compliancehero(){
    return(
        <>
        <section className="services-hero">
            <div className="hero-content">
                <h1>Accessibility Compliance</h1>
                <p className="description">
                    Web accessibility is the fast growing practice of optimizing website and applications
                    so the full functionality of that asset is available to people with disabilities. In fact, 
                    there are a number of Web Standards defined by the W3C and global laws that enable and enforce accessibility compliance.
                </p>
                <p className="subtitle">
                    <h3>Web Content Accessibility Guidelines (WCAG)</h3>
                </p>
                <p>WCAG is the global standard in digital accessibility guidelines. It enables all organizations to measure the accessibility of content, 
                    sites, and apps against documented requirements for all people, including those with disabilities.</p>
                <button className="contact-button">Contact Us</button>
            </div>
        </section>
        </>
    )   
}