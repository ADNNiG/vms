import Image from "next/image";

const ThirdSection = () => {
    return ( 
        <div className="md:py-5 bg-[#2b1c50] ">
            <div className="md:w-5/6 md:rounded-[80px] bg-[#2b1c50] md:mx-auto">
                <div className="py-20 md:py-40 px-10">
                    <div className="md:flex md:px-20 md:space-x-20 md:space-y-0 items-center justify-center">
                        <div className="flex md:w-1/2">
                            <div className="flex flex-col text-center">
                                <div className="md:text-4xl text-4xl text-[#eff0ff]">
                                    How We Organise Learning
                                </div>
                                <div className="text-xl md:text-2xl text-[#d1d1f7] py-6">
                                Our learning and teaching policy emphasises the importance of exciting, 
                                relevant and challenging lessons to prepare our learners 
                                for life.
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <Image src="/images/curriculum1.jpg" alt="image" width={600} height={600} className="object-cover md:rounded-[60px] w-full rounded-[40px] hover:scale-110 
                            hover:shadow-rose-800 transition-all duration-300 shadow-indigo-800 shadow-lg" />
                        </div>
                    </div>
                    <div className="md:flex items-center md:pt-20 justify-center pt-10 md:justify-evenly space-x-6">
                        <div>
                            <div className="md:text-3xl pb-4 text-lg text-[#eff0ff] font-medium">
                                Pre School 
                            </div>
                            <div className="w-96 text-[#d1d1f7] text-sm leading-6">
                                    At VMS Pre School, We are committed to serving 
                                    children of all religious and ethnic backgrounds 
                                    between the ages of 2 to 5 years. Also, we always 
                                    practice the the basic Montessori philosophy incorporating 
                                    art, music and movement, dance, gymnastics, computer and 
                                    outdoor play activities.
                            </div>

                            <div className="w-96 text-[#d1d1f7] text-sm leading-6 pt-10">
                                Age-appropriate activities and learning tools are one of the things we do to be able to 
                                create a flexible environment to meet the needs and interests of every child in our 
                                care. While we strongly feel that Pre-school years need to be full of nurturing and 
                                praise, we take pride in teaching independence and preparing our children for the 
                                years ahead of them.
                            </div>

                        </div>

                        <div>
                            <div className="md:text-3xl pb-4 text-lg pt-10 text-[#eff0ff] font-medium">
                                Basic - 5 Years to 11 Years
                            </div>
                            <div className="w-96 text-[#d1d1f7] text-sm leading-6">
                            From the age of 5 we teach by subject and all these subjects are conducted by 
                            highly qualified staff. At Virtue Model School we give children from an early 
                            age contact with subject specialists.
                            </div>

                            <div className="w-96 text-[#d1d1f7] text-sm leading-6 pt-10">
                            In our school curriculum and assessment procedures we follow the Lagos and the British 
                            National Primary Framework. When it comes to the basic School curriculum, in addition to 
                            the core subjects of English, mathematics and science, we includes history, information 
                            technology, music, art, physical education, French and Nigerian cultural astudies NCS. 
                            </div>
                        </div>

                        <div>
                            <div className="md:text-3xl pb-4 pt-10 text-lg text-[#eff0ff] font-medium">
                                College - 11 to 16 Years
                            </div>
                            <div className="w-96 text-[#d1d1f7] text-sm leading-6">
                            Our college students are taught in mixed ability groups for most 
                            subjects. We use the information from the Year 7 Entrance Exam and our 
                            own internal assessments to make sure students are rightly placed. 
                            All students learn through a common course of study that is differentiated to 
                            meet their needs and interests. English, mathematics and science are given high 
                            priority. Creative arts, Modern Foreign Languages subjects such as french, 
                            as well as PHE and games provide a well rounded education in active learning environment.
                            </div>
                        </div>

                      
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ThirdSection;