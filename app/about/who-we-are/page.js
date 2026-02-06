import React from 'react';

export default function WhoWeArePage() {
    return (
        <main className="container mx-auto px-6 py-20 max-w-4xl">
            <h1 className="text-4xl font-bold mb-10 text-center uppercase tracking-wider">Who We Are</h1>

            <section className="mb-16">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                    {/* Restored UI Elements */}
                    <h2 className="text-3xl font-bold mb-2">Building Innovation</h2>
                    <p className="text-xl text-gray-500 italic mb-6">"We design the future!"</p>

                    {/* Integrated New Content */}
                    <div className="text-lg text-gray-700 leading-relaxed text-justify space-y-4">
                        <p>
                            We are an international company dedicated to the development and supply of innovative solutions for construction and architectural design.
                        </p>
                        <p>
                            We stand out by combining quality, technology, and functionality in every product, transforming spaces and enhancing the value of each project.
                        </p>
                        <p>
                            Our philosophy is built on excellence, continuous improvement, and personalized service, strengthening long-term partnerships with our distributors and strategic partners across the Americas and around the world.
                        </p>
                        <p>
                            We believe in innovation as a driving force for growth, and we work every day to anticipate market trends.
                        </p>
                        <p className="font-bold pt-2">
                            We are Building Innovation: design, quality, and the future in every detail.
                        </p>
                    </div>
                </div>
            </section>

            <section className="grid md:grid-cols-2 gap-10 mb-16">
                <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide border-b-2 border-primary w-fit pb-1">Mission</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        At BUILDING INNOVATION, we simplify the world of construction through innovative, sustainable, and high-design solutions, offering a comprehensive portfolio of architectural materials that creates value, fosters strategic partnerships, and enhances the construction experience and quality of life.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide border-b-2 border-primary w-fit pb-1">Vision</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        To become a leading brand in construction innovation in Latin America, recognized for simplifying construction processes, setting trends in design and sustainability, and delivering high value architectural solutions. We aspire to build a scalable and collaborative business model, strengthening strategic partnerships and creating a positive impact on the industry, people, and the environment.
                    </p>
                </div>
            </section>

            <section className="bg-black text-white p-10 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest">Global Headquarters</h3>
                <address className="not-italic text-lg space-y-2 text-gray-300">
                    <p>6120 NW 74th Ave</p>
                    <p>Doral, Miami, FL 33166</p>
                    <p>United States</p>
                </address>
                <div className="mt-6 text-gray-400">
                    <p>More information: +1 (786) 968-5783</p>
                </div>
            </section>
        </main>
    );
}
