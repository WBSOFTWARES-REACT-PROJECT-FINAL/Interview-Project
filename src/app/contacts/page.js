

const Contacts = () => {
    return (
        <div>
            <div className='text-center text-white p-16 m-2 my-4 bg-blue-500 '>
                <h2 className='text-4xl font-medium'>Contact Us</h2>
                <h4>Get in touch with us</h4>
            </div>
            <div className='flex-row md:flex'>
                <div class=" border_shadow mx-2 mt-2 md:w-1/2 bg-white p-6 text-center">
                    <h2 class="text-2xl font-bold mb-4">Contact Information</h2>

                    <p class="text-lg"><span class="font-semibold">Email :</span> infogcauk@gmail.com</p>

                    <p class="text-lg"><span class="font-semibold">Phone :</span> +447999946311, +447550448928, +447932612667</p>

                    <p class="text-lg"><span class="font-semibold">Address :</span> Chattogram Centre, 113 New Road, Whitechapel, London E1 1HJ</p>
                </div>

                <div className='border_shadow mx-2 mt-2 md:w-1/2 bg-white p-6'>
                    <div class="max-w-lg mx-auto p-4">
                        <h2 class="text-2xl font-bold mb-6">Contact Form</h2>

                        <form>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-semibold mb-2">Full Name <span class="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    class="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>

                            <div class="mb-4">
                                <label class="block text-gray-700 font-semibold mb-2">Email <span class="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>

                            <div class="mb-4">
                                <label class="block text-gray-700 font-semibold mb-2">Phone <span class="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    class="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>

                            <div class="mb-6">
                                <label class="block text-gray-700 font-semibold mb-2">Message <span class="text-red-500">*</span></label>
                                <textarea
                                    placeholder="Message"
                                    class="w-full p-2 border border-gray-300 rounded"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                class="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contacts;