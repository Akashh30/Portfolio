import Home from "./Home"
import Footer from "../components/Footer"

function Education() {
    return (
        <>
            <section className="bg-black/90 min-h-screen w-full flex justify-center overflow-x-hidden">
                
                <div className="bg-white/10 w-full max-w-5xl min-w-0 h-auto text-center image-fade px-3 sm:px-6">

                    {/* Qualifications */}
                    <h1 className="bg-linear-to-r from-white/40 via-white to-white/98 bg-clip-text text-transparent text-3xl font-bold font-poppins pt-10">
                        Qualifications
                    </h1>

                    <div className="flex justify-center pt-8 w-full overflow-hidden">
                        <table className="w-full max-w-full table-fixed border-separate border-spacing-x-2 sm:border-spacing-x-8 border-spacing-y-2">
                            
                            <thead>
                                <tr>
                                    <th className="text-white text-lg sm:text-xl text-start pr-2 sm:pr-8">
                                        Academic Qualification
                                    </th>

                                    <th className="text-white text-lg sm:text-xl whitespace-nowrap">
                                        Years
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="text-white text-sm sm:text-base text-start break-words">
                                        MSC in Computer Science from Ramnarain Ruia College
                                    </td>

                                    <td className="text-white text-sm sm:text-base text-center whitespace-nowrap">
                                        2023-2025
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-white text-sm sm:text-base text-start break-words">
                                        BSC in Computer Science from Mulund College of Commerce
                                    </td>

                                    <td className="text-white text-sm sm:text-base text-center whitespace-nowrap">
                                        2020-2023
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>


                    {/* Divider */}
                    <div className="mt-8 bg-linear-to-r from-transparent via-white/30 to-transparent h-0.5" />


                    {/* Experience */}
                    <h1 className="bg-linear-to-r from-white/40 via-white/80 to-white bg-clip-text text-transparent text-3xl font-bold font-poppins pt-5">
                        Experience
                    </h1>

                    <div className="flex justify-center pt-8 w-full overflow-hidden">
                        <table className="w-full max-w-full table-fixed border-separate border-spacing-x-2 sm:border-spacing-x-8 border-spacing-y-2">

                            <thead>
                                <tr>
                                    <th className="bg-linear-to-r from-white/40 via-white/80 to-white bg-clip-text text-transparent text-lg sm:text-xl text-start pr-2 sm:pr-8">
                                        Professional Experience
                                    </th>

                                    <th className="bg-linear-to-r from-white/40 via-white/80 to-white bg-clip-text text-transparent text-lg sm:text-xl whitespace-nowrap">
                                        Period
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="text-white text-sm sm:text-base text-start break-words">
                                        Python Developer at Cyfinex Pvt Limited
                                    </td>

                                    <td className="text-white text-sm sm:text-base text-center whitespace-nowrap">
                                        Working
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-white text-sm sm:text-base text-start break-words">
                                        Devops Engineer intern at Accenovate Tech Pvt Solution
                                    </td>

                                    <td className="text-white text-sm sm:text-base text-center whitespace-nowrap">
                                        3 months
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>


                    {/* Divider */}
                    <div className="mt-8 bg-linear-to-r from-transparent via-white/30 to-transparent h-0.5" />


                    {/* Skills */}
                    <h1 className="bg-linear-to-r from-white/40 via-white/80 to-white bg-clip-text text-transparent text-3xl font-bold font-poppins pt-5">
                        Skills
                    </h1>


                    {/* Desktop Skills */}
                    <table className="mx-auto mt-5 border-separate border-spacing-x-4 sm:border-spacing-x-8 border-spacing-y-3">

                        <tbody className="hidden min-[700px]:table-row-group">
                            <tr>
                                <td className="text-sm sm:text-lg text-white text-start font-poppins">
                                    React JS
                                </td>

                                <td className="text-sm sm:text-lg text-white text-start font-poppins">
                                    JavaScript
                                </td>

                                <td className="text-sm sm:text-lg text-white text-start font-poppins">
                                    Tailwind CSS
                                </td>

                                <td className="text-sm sm:text-lg text-white text-start font-poppins">
                                    HTML, CSS
                                </td>
                            </tr>

                            <tr>
                                <td className="text-sm sm:text-lg text-white text-start font-poppins">
                                    Python
                                </td>

                                <td className="text-sm sm:text-lg text-white text-start font-poppins">
                                    Django
                                </td>

                                <td className="text-sm sm:text-lg text-white text-start font-poppins">
                                    Git & Github
                                </td>

                                <td className="text-sm sm:text-lg text-white text-start font-poppins">
                                    Docker
                                </td>
                            </tr>
                        </tbody>


                        {/* Mobile Skills */}
                        <tbody className="table-row-group min-[700px]:hidden">

                            <tr>
                                <td className="text-sm text-white text-start font-poppins">
                                    React
                                </td>

                                <td className="text-sm text-white text-start font-poppins">
                                    JavaScript
                                </td>

                                <td className="text-sm text-white text-start font-poppins">
                                    Tailwind CSS
                                </td>
                            </tr>

                            <tr>
                                <td className="text-sm text-white text-start font-poppins">
                                    Python
                                </td>

                                <td className="text-sm text-white text-start font-poppins">
                                    Django
                                </td>

                                <td className="text-sm text-white text-start font-poppins">
                                    Git & Github
                                </td>
                            </tr>

                            <tr>
                                <td className="text-sm text-white text-start font-poppins">
                                    HTML, CSS
                                </td>

                                <td className="text-sm text-white text-start font-poppins">
                                    Docker
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>

            <Footer />
        </>
    )
}

export default Education