'use client'

import { Button, Card, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, Switch } from "@/shared/components"
import { useSettingsCV } from "../../hooks"
import { useTranslations } from "next-intl"

export function Settings() {
    const t = useTranslations('candidat.settingsCV')
    const { form, onSubmit, isFetching } = useSettingsCV()
    return (
        <Card className="p-5">{<Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <h3 className="mb-4 text-lg font-medium">Visibilita curriculum</h3>
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="isOpenForAgency"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                    <div className="space-y-0.5">
                                        <FormLabel>{t('isOpenForAgency')}</FormLabel>
                                        <FormDescription>{t('isOpenForAgencyLabel')}</FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            disabled={isFetching}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isShowCVInSearch"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                    <div className="space-y-0.5">
                                        <FormLabel>{t('isShowCVInSearchLabel')}</FormLabel>
                                        <FormDescription>{t('isShowCVInSearch')}</FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            disabled={isFetching}
                                            onCheckedChange={field.onChange}
                                            aria-readonly
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </Form>}
        </Card>
    )
}