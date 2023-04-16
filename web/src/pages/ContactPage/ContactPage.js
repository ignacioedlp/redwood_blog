import { Link, routes } from '@redwoodjs/router'
import { Metric, Title, Subtitle, Bold, Italic, Text } from "@tremor/react";

import { MetaTags, useMutation } from '@redwoodjs/web'
import { Form, Label, TextField, TextAreaField, Submit, FieldError, useForm, FormError } from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
    mutation CreateContactMutation($input: CreateContactInput!) {
      createContact(input: $input) {
        id
      }
    }
  `

const ContactPage = () => {

  const formMethods = useForm()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Contact saved')
      formMethods.reset()
    }

  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <div className='flex flex-col justify-center items-center h-[80vh]'>
        <div className='flex flex-col items-center justify-center w-1/2 border-4 rounded-lg shadow-2xl border-zinc-900 shadow-black h-min'>
          <div className='flex flex-col gap-5 p-5'>
            <Metric>Contact me</Metric>
            <Subtitle className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sequi necessitatibus, nostrum porro omnis dicta earum sunt molestias ipsum corporis nulla aliquam pariatur rem incidunt aliquid et odio dignissimos architecto.</Subtitle>
          </div>
          <Form onSubmit={onSubmit} formMethods={formMethods} error={error} className='flex flex-col items-center justify-center w-full gap-3 p-5'>
            <FormError error={error} wrapperClassName="rw-form-error-wrapper" titleClassName="rw-form-error-title" listClassName="rw-form-error-list" />
            <div className='flex items-center justify-around w-full gap-2 '>
              <div className='flex gap-2'>
                <Label name="name" errorClassName="error" className='text-lg font-bold'>
                  Name
                </Label>
                <TextField
                  name="name"
                  defaultValue=""
                  validation={{ required: true }}
                  errorClassName="error"
                  className='border-2 border-black rounded-lg'
                />
              </div>
              <div className='flex gap-2'>
                <Label name="email" errorClassName="error" className='text-lg font-bold'>
                  Email
                </Label>
                <TextField
                  name="email"
                  defaultValue=""
                  validation={{
                    required: true,
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  }}
                  className='border-2 border-black rounded-lg'
                  errorClassName="error"
                />
              </div>

            </div>
            <div className='flex flex-col justify-start w-full'>
              <Label name="message" errorClassName="error" className='text-lg font-bold'>
                Message
              </Label>
              <TextAreaField
                className='w-full border-2 border-black rounded-lg'
                name="message"
                defaultValue=""
                validation={{ required: true }}
                errorClassName="error"

              />
            </div>

            <Submit disabled={loading} className='w-full p-4 font-bold text-indigo-600 border-2 border-indigo-600 rounded-lg'>Save</Submit>
          </Form>
        </div>
      </div>
    </>
  )
}

export default ContactPage
