import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Form, Label, TextField, TextAreaField, Submit, FieldError, useForm, FormError } from '@redwoodjs/forms'
import { Toaster, toast } from '@redwoodjs/web/toast'

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

      <Toaster />
      <Form onSubmit={onSubmit} formMethods={formMethods} error={error}>
        <FormError error={error} wrapperClassName="rw-form-error-wrapper" titleClassName="rw-form-error-title" listClassName="rw-form-error-list" />
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          defaultValue=""
          validation={{ required: true }}
          errorClassName="error"
        />
        <Label name="email" errorClassName="error">
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
          errorClassName="error"
        />
        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          defaultValue=""
          validation={{ required: true }}
          errorClassName="error"
        />
        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
