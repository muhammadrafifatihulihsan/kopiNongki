import React from 'react';
import { motion } from 'framer-motion';
import { Bean, Flame, Droplet, CupSoda, ArrowRight } from 'lucide-react';

const steps = [
    { icon: <Bean />, title: "Sourcing", desc: "Sumatra High-Grade" },
    { icon: <Flame />, title: "Roasting", desc: "Small Batch Daily" },
    { icon: <Droplet />, title: "Brewing", desc: "High Precision" },
    { icon: <CupSoda />, title: "Serving", desc: "Crafted for You" }
];

const Process = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] text-black relative overflow-hidden">
            {/* Subtle Futuristic Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D2691E]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <span className="inline-block py-1 px-3 border border-black/10 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-[#8B4513] bg-white/50 backdrop-blur-sm">
                            The Methodology
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            From Bean to Cup. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] to-[#D2691E]">Pure Precision.</span>
                        </h2>
                    </div>
                    <div className="hidden md:block h-px w-32 bg-gradient-to-r from-black/20 to-transparent mb-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative border border-white/40 bg-white/40 backdrop-blur-sm p-8 rounded-3xl hover:border-[#D2691E]/20 hover:bg-white hover:shadow-xl hover:shadow-[#D2691E]/5 transition-all duration-500"
                        >
                            <div className="absolute top-8 right-8 text-xs font-mono opacity-30">0{index + 1}</div>
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-black/5 group-hover:scale-110 group-hover:bg-[#2C1810] group-hover:text-white transition-all duration-500">
                                <div className="text-[#2C1810] w-6 h-6 group-hover:text-white transition-colors">
                                    {React.cloneElement(step.icon, { size: 24, strokeWidth: 1.5 })}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#2C1810]">{step.title}</h3>
                            <p className="text-gray-500 text-sm font-medium">{step.desc}</p>

                            <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-[#8B4513]">
                                Learn More <ArrowRight size={12} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
