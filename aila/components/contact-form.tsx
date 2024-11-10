import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";

import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { EmailSchema } from "@/schema";
import { Textarea } from "./ui/textarea";


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
            console.log(data);
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
                                <Input id="firstName" type="text" {...field} />
                                <FormMessage>{form.formState.errors.firstName?.message}</FormMessage>
                            </FormControl>
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
                                <Input id="lastName" type="text" {...field} />
                                <FormMessage>{form.formState.errors.lastName?.message}</FormMessage>
                            </FormControl>
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
                                <Input id="email" type="email" {...field} />
                                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                            </FormControl>
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
                                <Textarea id="message" {...field} />
                                <FormMessage>{form.formState.errors.message?.message}</FormMessage>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type="submit">Send</Button>
            </form>
        </Form>
    );
}
 
export default ContactForm;