import React from 'react';
import { motion } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
];

const Gallery = () => {
    return (
        <section className="py-20 bg-coffee-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-coffee-dark mb-4">Galeri Suasana</h2>
                    <p className="text-coffee-body">Sudut-sudut nyaman yang kami siapkan untukmu.</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`KopiNongki Interior ${index + 1}`}
                                className="w-full h-auto hover:brightness-110 transition-all duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
