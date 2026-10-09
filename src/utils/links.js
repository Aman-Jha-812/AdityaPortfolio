/**
 * Link helpers.
 *
 * Email links open Gmail's compose window directly instead of the visitor's
 * default mail client. `gmailComposeUrl` builds a Gmail compose URL with an
 * optional subject and body.
 */
export function gmailComposeUrl(email, { subject, body } = {}) {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to: email })
  if (subject) params.set('su', subject)
  if (body) params.set('body', body)
  return `https://mail.google.com/mail/?${params.toString()}`
}
