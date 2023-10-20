import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

const MAX_LENGTH_STRING = 100;

const contactInfoSchema = z.object({
    firstName: z.string().min(1, "First name is required").max(MAX_LENGTH_STRING, "First name is too long"),
    lastName: z.string().min(1, "Last name is required").max(MAX_LENGTH_STRING, "Last name is too long"),
    phone: z.string().min(1, "Phone is required").max(MAX_LENGTH_STRING, "Phone is too long"),
});

type ContactInfo = z.infer<typeof contactInfoSchema>;

export const Booking = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ContactInfo>({
        resolver: zodResolver(contactInfoSchema),
        mode: "onBlur",
    });

    const onSubmit: SubmitHandler<ContactInfo> = (data) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                console.log(data);
                resolve();
            }, 3000);
        });
    };

    function onInvalid(errors) {
        console.log(errors);
    }

    return (
        <div>
            <h1>Booking</h1>
            <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
                <FormControl isInvalid={!!errors.firstName}>
                    <FormLabel htmlFor={"firstName"}>First name</FormLabel>
                    <Input type={"text"} id={"firstName"} {...register("firstName")} />
                    <FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.lastName}>
                    <FormLabel htmlFor={"lastName"}>Last name</FormLabel>
                    <Input type={"text"} id={"lastName"} {...register("lastName")} />
                    <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.phone}>
                    <FormLabel htmlFor={"phone"}>Phone</FormLabel>
                    <Input type={"text"} id={"phone"} {...register("phone")} />
                    <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage>
                </FormControl>
                <Button mt={4} type={"submit"} isLoading={isSubmitting}>
                    Submit
                </Button>
            </form>
        </div>
    );
};
