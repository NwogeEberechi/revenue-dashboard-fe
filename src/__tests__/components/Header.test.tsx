import userEvent from '@testing-library/user-event'

import { render, screen } from '@/__tests__/utils/test-utils'
import Header from '@/components/layout/Header'

jest.mock('@/features/user/hooks/useUser', () => ({
  useUser: () => ({
    user: { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    isLoading: false,
    isError: false,
  }),
}))

jest.mock('@/features/user/utils/userHelpers', () => ({
  getUserInitials: () => 'JD',
  getUserFullName: () => 'John Doe',
}))

describe('Header', () => {
  it('opens user profile dropdown on click', async () => {
    render(<Header />)

    const profileChip = screen.getAllByText('JD')[0]
    await userEvent.click(profileChip)
    expect(await screen.findByText(/Purchase History/i)).toBeInTheDocument()
  })
})
