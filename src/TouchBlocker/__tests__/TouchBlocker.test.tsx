import { render } from '@testing-library/react-native'
import React from 'react'
import { Button } from 'react-native'
import TouchBlocker from '../TouchBlocker'

describe('TouchBlocker Component unit tests :', () => {
  it('Should render children ', () => {
    const mockFn = jest.fn()
    const { toJSON } = render(
      <TouchBlocker>
        <Button title='button' onPress={mockFn} />
      </TouchBlocker>
    )

    const tree = toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("Shouldn't add panHandlers to Root view when enableTouchEvents prop is true", () => {
    const mockFn = jest.fn()
    const { toJSON } = render(
      <TouchBlocker enableTouchEvents>
        <Button title='button' onPress={mockFn} />
      </TouchBlocker>
    )

    const tree = toJSON()
    expect(tree).toMatchSnapshot()
  })
})
