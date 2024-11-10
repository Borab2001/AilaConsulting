import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { EmailSchema } from "@/schema";
import { SendEmail } from "@/actions";


const ContactForm = () => {

    const router = useRouter();
    const form = useForm<z.infer<typeof EmailSchema>>({
        resolver: zodResolver(EmailSchema),
        mode: "onChange",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        }
    });

    const onSubmit = async (data: z.infer<typeof EmailSchema>) => {
        try {
            await SendEmail(data);

            toast.success("Your message is sent successfully!");
            router.refresh();
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
    }

    return (
        <Form {...form}>
            <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormField
                    name="firstName"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="firstName">First Name</FormLabel>
                            <FormControl>
                                <Input id="firstName" type="text" {...field} placeholder="Your first name here..." />
                            </FormControl>
                            <FormMessage>{form.formState.errors.firstName?.message}</FormMessage>
                        </FormItem>
                    )}
                />

                <FormField
                    name="lastName"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <FormControl>
                                <Input id="lastName" type="text" placeholder="Your last name here..." {...field} />
                            </FormControl>
                            <FormMessage>{form.formState.errors.lastName?.message}</FormMessage>
                        </FormItem>
                    )}
                />

                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormControl>
                                <Input id="email" type="email" placeholder="Your email here..." {...field} />
                            </FormControl>
                            <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                        </FormItem>
                    )}
                />

                <FormField
                    name="message"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <FormControl>
                                <Textarea id="message" {...field} placeholder="Your message here..." />
                            </FormControl>
                            <FormMessage>{form.formState.errors.message?.message}</FormMessage>
                        </FormItem>
                    )}
                />

                <Button type="submit">Send</Button>
            </form>
        </Form>
    );
}
 
export default ContactForm;