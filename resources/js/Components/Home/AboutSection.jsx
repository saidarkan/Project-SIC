import React, { useRef } from "react";
const AboutSection = React.forwardRef((props, ref) => {
    return (
        <section
            ref={ref}
            className="min-h-[200vh] bg-gradient-to-b from-lime-900 via-lime-800 to-lime-700 flex items-center justify-center relative overflow-hidden"
        >
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
                <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl eget consectetur sagittis, nisl nunc
                    consectetur nisi, euismod aliquam nunc nisl euismod.
                </p>
            </div>
        </section>
    );
});
export default AboutSection;
