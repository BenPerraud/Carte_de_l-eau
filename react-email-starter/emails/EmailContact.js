import { Html, Heading, Text } from "@react-email/components"

const EmailContact = ({
  name,
  email,
  message
}) => {
  return (
    <Html lang="fr">
      <Heading as="h3">Message reçu depuis le site www.cartedeleau.fr</Heading>
      <Text>Nom: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Message: {message}</Text>
    </Html>
  )
}
export default EmailContact

