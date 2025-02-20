import { FormEventParams, ViewEventParams } from "@/components/meta-pixel";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string"
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}

// Page View Tracking
export const trackPageView = (params: ViewEventParams = {}): void => {
  if (typeof window !== "undefined" && window.fbq) {
    // Track standard PageView
    window.fbq("track", "PageView");

    // Track detailed custom page view
    window.fbq("trackCustom", "DetailedPageView", {
      ...params,
      timestamp: new Date().toISOString(),
    });
  }
};

// Form Tracking
export const trackFormView = (params: FormEventParams): void => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", "FormView", {
      ...params,
      timestamp: new Date().toISOString(),
    });
  }
};

export const trackFormStart = (params: FormEventParams): void => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", "FormStart", {
      ...params,
      timestamp: new Date().toISOString(),
    });
  }
};

export const trackFormSubmission = (params: FormEventParams): void => {
  if (typeof window !== "undefined" && window.fbq) {
    // Track standard Lead event
    window.fbq("track", "Lead", {
      content_name: params.formName,
      content_category: params.formCategory,
      status: params.success ? "success" : "failure",
    });

    // Track detailed custom form submission
    window.fbq("trackCustom", "FormSubmission", {
      ...params,
      timestamp: new Date().toISOString(),
    });
  }
};
