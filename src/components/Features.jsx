import React from 'react';
import { Coffee, Droplets, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Coffee className="w-8 h-8 text-coffee-primary" />,
        title: "Biji Pilihan",
        description: "Menggunakan biji Arabika & Robusta grade specialty dari petani lokal terbaik."
    },
    {
        icon: <Droplets className="w-8 h-8 text-coffee-primary" />,
        title: "Metode Seduh",
        description: "Beragam metode dari Pour Over, Aeropress, hingga Cold Brew yang menyegarkan."
    },
    {
        icon: <Heart className="w-8 h-8 text-coffee-primary" />,
        title: "Suasana",
        description: "Tempat yang nyaman dan tenang, cocok untuk kerja atau sekadar bersantai."
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-coffee-bg transition-colors cursor-default"
                        >
                            <div className="bg-coffee-bg p-4 rounded-full mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-coffee-dark mb-3">{feature.title}</h3>
                            <p className="text-coffee-body leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
