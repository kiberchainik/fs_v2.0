'use client'

import { Button, Card, CardContent, CardHeader, CardTitle, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Loader, Switch } from "@/shared/components/ui";
import { useGetProfile } from "../hooks";
import { UserButton, UserButtonLoading } from "./UserButton";
import { SettingsSchema, TypeSettingsSchema } from "../schemes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdProfileMutation } from "../hooks/useUpdProfileMutation";
import { toast } from "sonner";
import { toastMessageHandler } from "@/shared/utils";

export function SettingsForm () {
    const {user, isLoading, error} = useGetProfile()

    const form = useForm<TypeSettingsSchema>({
        resolver: zodResolver(SettingsSchema),
        values: {
            name: user?.displayName || '',
            email: user?.email || '',
            isTwoFactorEnables: user?.isTwoFactorEnabled || false
        }
    })

    const {updProfile, isPending} = useUpdProfileMutation()
    const onSubmit = (values: TypeSettingsSchema) => {
        updProfile(values)
    }

    if(error) {
        toastMessageHandler(error)
    }

    if(!user) return null

    return <Card className='w-[400]px'>
        <CardHeader className='flex flex-row items-center justify-between'>
            <CardTitle>Profile settings</CardTitle>
            {isLoading ? <UserButtonLoading /> : <UserButton user={user} isLoading = {isLoading} />}
        </CardHeader>
        <CardContent>
            {isLoading ? <Loader /> : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-2 space-y-2'>
                        <FormField control={form.control} name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl><Input placeholder="Your name" {...field} disabled={isLoading} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl><Input placeholder="Your email" type="email" {...field} disabled={isLoading} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="isTwoFactorEnables"
                            render={({field}) => (
                                <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
                                    <div className='space-y-0.5'>
                                        <FormLabel>Two factor</FormLabel>
                                        <FormDescription>
                                            Enabled two factor
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isLoading}>Create account</Button>
                    </form>
                </Form>
            )}
        </CardContent>
    </Card>
}