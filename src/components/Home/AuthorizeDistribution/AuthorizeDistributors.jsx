import AuthorizeDistributorCard from "@/components/shared/AuthorizeDistributorCard/AuthorizeDistributorCard";


const AuthorizeDistributors = () => {
    return (
        <section className="mt-36 py-16 bg-[#f6f6f6]">
            <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 py-5 lg:flex-row lg:gap-10">

                <div className='flex lg:w-2/5 justify-center items-center flex-col '>
                    <p className='text-black text-center p-4'>
                        <span className='text-3xl font-bold  text-si-primary mb-3'>Authorize Distributor </span>
                        <br />
                        <span className='text-5xl font-bold mt-4 text-si-primary'>4+</span>
                        <br />
                        around all over the world</p>
                </div>
                <div className="flex lg:w-3/4 flex-col justify-center text-justify">
                    <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas ab est eius perferendis laborum fuga itaque suscipit, tempora, vero sit aliquam facere nisi, fugit beatae et doloribus enim! Ipsum?</p>

                    <div className="mt-7">
                        <AuthorizeDistributorCard />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AuthorizeDistributors;