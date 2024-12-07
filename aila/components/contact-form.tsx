import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { EmailSchema } from "@/schema";
import { SendEmail } from "@/actions";


interface ContactFormProps {
    t: (key: string) => string;
}

const ContactForm: React.FC<ContactFormProps> = ({
    t 
}) => {

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
            form.reset();
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
                            <FormLabel htmlFor="firstName">{t("firstName")}</FormLabel>
                            <FormControl>
                                <Input id="firstName" type="text" {...field} placeholder={t("firstNamePlaceholder")} />
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
                            <FormLabel htmlFor="lastName">{t("firstName")}</FormLabel>
                            <FormControl>
                                <Input id="lastName" type="text" placeholder={t("lastNamePlaceholder")} {...field} />
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
                            <FormLabel htmlFor="email">{t("email")}</FormLabel>
                            <FormControl>
                                <Input id="email" type="email" placeholder={t("emailPlaceholder")} {...field} />
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
                            <FormLabel htmlFor="message">{t("message")}</FormLabel>
                            <FormControl>
                                <Textarea id="message" {...field} placeholder={t("messagePlaceholder")} />
                            </FormControl>
                            <FormMessage>{form.formState.errors.message?.message}</FormMessage>
                        </FormItem>
                    )}
                />

                
                <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                        <>
                            <LoaderCircle
                                className="-ms-1 me-2 animate-spin"
                                size={16}
                                strokeWidth={2}
                                aria-hidden="true"
                            />
                            {t("sendButtonLoading")}
                        </>
                    ) : (
                        <>
                            {t("sendButton")}
                        </>
                    )}
                </Button>
            </form>
        </Form>
    );
}
 
export default ContactForm;