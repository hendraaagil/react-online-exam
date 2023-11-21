import React from 'react'
import { createPortal } from 'react-dom'

import { Button } from '@/components/ui'

type ModalProps = {
  time: number
  submitHandler: () => void
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ time, submitHandler, setShowModal }: ModalProps) => (
  <div className="fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
    <div className="relative mx-1 my-10 w-full max-w-lg rounded bg-gray-100 shadow sm:mx-4">
      <div className="flex h-full w-full flex-col p-5">
        <p className="text-lg font-medium">
          {time > 0
            ? 'Are you sure you want to finish this exam?'
            : 'Time is up! Finish this exam now.'}
        </p>
        <div className="mt-4 flex w-full flex-col items-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          {time > 0 && (
            <Button
              color="red"
              className="w-full"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
          )}
          <Button color="green" className="w-full" onClick={submitHandler}>
            Finish
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export const FinishModal = ({ ...props }: ModalProps) =>
  createPortal(<Modal {...props} />, document.getElementById('modal')!)
