import React from "react";
import { skills } from "@/content";

export const Skills = () => {
    return (
        <section className="min-h-screen py-16 text-primary-text flex flex-col justify-center pt-36">
            <h2 className="text-primary-text text-5xl md:text-6xl text-center font-bold mb-20">
                {skills.headline}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 ml-20 sm:mx-16">
                {skills.skillList.map((category) => (
                    <div key={category.category}>
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-secondary-text">
                                {category.category}
                            </h3>
                        </div>
                        {category.items.map(({ name, icon: Icon, color }) => (
                            <div
                                key={name}
                                className="flex gap-3 my-5 items-center"
                            >
                                <div className="rounded-md bg-card-bg p-1">
                                    <Icon
                                        className="text-xl"
                                        color="rgb(248, 250, 252)"
                                    />
                                </div>
                                <span className="text-primary-text">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};
