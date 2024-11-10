import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";

import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { EmailSchema } from "@/schema";


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

    return (
        <div className="w-full h-full flex flex-col">

        </div>
    );
}
 
export default ContactForm;