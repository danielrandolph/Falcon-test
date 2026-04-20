"use client";
import { SearchIcon, XIcon } from "lucide-react";
import type {
  SearchFieldProps as AriaSearchFieldProps,
  ValidationResult,
} from "react-aria-components";
import { SearchField as AriaSearchField } from "react-aria-components";

import { Description, FieldError, FieldGroup, Input, Label } from "./field";
import { FieldButton } from "./fieldButton";
import { composeTailwindRenderProps } from "./utils";

interface Props extends AriaSearchFieldProps {
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  label?: string;
  placeholder?: string;
}

export function SearchField({
  className,
  description,
  errorMessage,
  label,
  placeholder,
  ...otherProps
}: Props) {
  return (
    <AriaSearchField
      {...otherProps}
      className={composeTailwindRenderProps(
        className,
        "tw:group tw:flex tw:max-w-full tw:min-w-10 tw:flex-col tw:gap-1 tw:font-sans",
      )}
    >
      {label && <Label>{label}</Label>}

      <FieldGroup>
        <SearchIcon
          aria-hidden
          className="tw:ml-2 tw:h-4 tw:w-4 tw:text-neutral-500 tw:group-disabled:text-neutral-200 tw:forced-colors:text-[ButtonText] tw:forced-colors:group-disabled:text-[GrayText]"
        />

        <Input
          className="tw:pl-2 tw:[&::-webkit-search-cancel-button]:hidden"
          placeholder={placeholder}
        />

        <FieldButton className="tw:mr-1 tw:w-6 tw:group-empty:invisible">
          <XIcon aria-hidden className="tw:h-4 tw:w-4" />
        </FieldButton>
      </FieldGroup>

      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaSearchField>
  );
}
