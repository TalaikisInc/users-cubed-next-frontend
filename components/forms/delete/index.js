import React, { useState, Fragment } from 'react'

import { Text, Heading, Submit, Modal, Button } from 'components/primitives'
import { t } from 'translations'
import useStore from 'store'

const DeleteForm = () => {
  const [globalState, globalActions] = useStore()
  const [isOpen, setIsOpen] = useState(false)

  const _handleSubmit = (e) => {
    e.preventDefault()
    globalActions.deleteUser()
  }

  const _toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Fragment>
      <Submit danger onClick={() => _toggleModal}>{ t('form.delete') }</Submit>
      <Modal
        isOpen={isOpen}
        onBackgroundClick={_toggleModal}
        onEscapeKeydown={_toggleModal}>
        <Heading small>{ t('delete.question') }</Heading>
        <Text>{ t('delete.note') }</Text>
        <Button square onClick={_toggleModal}>{ t('cancel') }</Button>
        <Button square alert onClick={_handleSubmit}>
          { t('delete.confirm') }
        </Button>
      </Modal>
    </Fragment>
  )
}

export default DeleteForm
