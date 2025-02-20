'use client';

import { trackFormStart, trackFormSubmission, trackFormView } from '@/lib/utils';
import React, { useEffect } from 'react';
import {
    UseFormReturn,
    FieldValues,
    SubmitHandler,
    useForm,
    UseFormProps
} from 'react-hook-form';

interface TrackedFormProps<TFormValues extends FieldValues> {
    formId: string;
    formName: string;
    formCategory: string;
    onSubmit: SubmitHandler<TFormValues>;
    children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
    formOptions?: UseFormProps<TFormValues>;
}

export function TrackedForm<TFormValues extends FieldValues>({
    formId,
    formName,
    formCategory,
    onSubmit,
    children,
    formOptions = {}
}: TrackedFormProps<TFormValues>): JSX.Element {
    const methods = useForm<TFormValues>(formOptions);

    useEffect(() => {
        // Track form view when component mounts
        trackFormView({
            formId,
            formName,
            formCategory
        });
    }, [formId, formName, formCategory]);

    const handleSubmit = async (data: TFormValues) => {
        try {
            await onSubmit(data);
            trackFormSubmission({
                formId,
                formName,
                formCategory,
                formData: data,
                success: true
            });
        } catch (error) {
            trackFormSubmission({
                formId,
                formName,
                formCategory,
                formData: data,
                success: false,
                failureReason: error instanceof Error ? error.message : 'Unknown error'
            });
            // Re-throw the error for the form's error handling
            throw error;
        }
    };

    const handleFocus = () => {
        trackFormStart({
            formId,
            formName,
            formCategory
        });
    };

    return (
        <form
            onSubmit={methods.handleSubmit(handleSubmit)}
            onFocus={handleFocus}
        >
            {children(methods)}
        </form>
    );
}
