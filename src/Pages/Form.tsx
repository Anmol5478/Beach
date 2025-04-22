import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Form = () => {
    return (
        <section
            id="contact"
            className="w-full px-4 py-16 bg-blue-50 border rounded-xl shadow-md mb-12 mx-auto flex flex-row gap-8 m-4"
        >
            <div className="w-full max-w-3xl bg-white p-8 m-2 rounded-xl shadow">
                <h2 className="text-3xl font-bold text-center mb-8">Feedback</h2>

                <form className="space-y-6 mb-10">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your full name" />
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                    </div>

                    <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Tell us what’s on your mind..."
                            rows={4}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                    >
                        Submit
                    </Button>
                </form>

            </div>

            <div className="w-full h-full overflow-hidden rounded-xl shadow">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.871892057373!2d77.44477937555293!3d28.63360137566421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d4e3485ed%3A0xe0fe1689b57c7d2e!2sABESIT%20GROUP%20OF%20INSTITUTIONS!5e0!3m2!1sen!2sin!4v1745304356465!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                    className="border-0 w-full h-full"
                />
            </div>
        </section>
    );
};

export default Form;
