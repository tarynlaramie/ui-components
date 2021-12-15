import test1 from './test1.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(test1)

  expect(getByText('Hello component!'));
})
