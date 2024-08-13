'use client'
import type { DescriptionComponent, PayloadClientReactComponent } from 'payload'

import { useFieldProps, useFormFields } from '@payloadcms/ui'
import React from 'react'

export const FieldDescriptionComponent: PayloadClientReactComponent<
  DescriptionComponent<'text'>
> = () => {
  const { path } = useFieldProps()
  const field = useFormFields(([fields]) => (fields && fields?.[path]) || null)
  const { value } = field || {}

  return (
    <div className={`field-description-${path}`}>
      Component description: {path} - {value as string}
    </div>
  )
}