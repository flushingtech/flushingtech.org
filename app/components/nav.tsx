export default function Nav() {
    return (
        <nav className="flex bg-gray-800 p-4 ">
            <div className="text-lg font-bold text-white">
                Logo
            </div>
            <div className="flex-1 flex justify-center bg-blue-200 mr-8">
                <ul className="space-x-4">
                    <li >
                    <a href="#" className="text-white hover:underline">Events</a>
                    </li>

                    <li >
                        
                    <a href="#" className="text-white hover:underline">GitHub</a>
                    </li>
                    <li>
                        
                    <a href="#" className="text-white hover:underline">Meetup</a>
                    </li>
                    <li>
                        
                    <a href="#" className="text-white hover:underline">Discord</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

// remember to add external link icon for accessibility
// make it sticky 
// get rid of the innate list formatting 
