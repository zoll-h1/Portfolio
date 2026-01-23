function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background efects будут добавлены позже*/}

            <div classNmae="relative z-10 text-center px-6">

                {/* Greeting */}

                <p className="text-xl text-gray-400 mb-4">
                    Hi , I'm 
                </p>

                {/* Name - Big*/}
                <h1 className="text-7xl font-bold text-white mb-6">
                   Nigga   
                </h1>

                {/* Role/Title*/}
                <h2 className="text-7xl text-gray-300 mb-8">
                  Computer Science Nigga & Super Nigga
                </h2>

                {/* Short Bio*/}
                <p className="text-lg text-gray-400 max-w-2xl mx-auto md-12">
                    I was realy black in my past life
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 justify-center">
                    <a
                      href="#projects"
                      className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition colors"        
                    >
                        View Projects
                    </a>
                    <a
                    
                      href="#contact"
                      className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition colors"                     
                    >
                        Contact me
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Hero;