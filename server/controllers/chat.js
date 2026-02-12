export const handleChat = async (req, res) => {
    try {
        const { message } = req.body;
        console.log("Chat request received:", message);

        // Simulate AI delay for realism
        await new Promise(resolve => setTimeout(resolve, 1000));

        let reply = "I'm AccessGuard AI. I can help you understand accessibility standards like WCAG, ADA, and Section 508.";

        const lowerMsg = message.toLowerCase();

        if (lowerMsg.includes("check") || lowerMsg.includes("analyze") || lowerMsg.includes("test")) {
            reply = "To analyze a website, click the 'Analyze Website' button in the navbar or header. I can help you interpret the results once you have them!";
        } else if (lowerMsg.includes("wcag")) {
            reply = "WCAG (Web Content Accessibility Guidelines) are the international standard. The current version is 2.2. Ideally, you want to aim for Level AA compliance.";
        } else if (lowerMsg.includes("color") || lowerMsg.includes("contrast")) {
            reply = "Color contrast is crucial! Text should have a contrast ratio of at least 4.5:1 against its background. Large text needs 3:1.";
        } else if (lowerMsg.includes("contact") || lowerMsg.includes("support")) {
            reply = "You can reach our team via the Contact page. We offer audits, remediation, and training services.";
        } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
            reply = "Hello! How can I assist you with your digital accessibility journey today?";
        }

        res.json({ reply });
    } catch (error) {
        console.error("Chat error:", error);
        res.status(500).json({ error: "Failed to process chat message" });
    }
};
