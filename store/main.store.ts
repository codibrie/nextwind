import create from 'zustand'

type State = {
  members: number
  update: (newValue: number) => void
}

export const useStore = create<State>((set) => ({
  members: 10,
  update: (newValue) => set(() => ({ members: newValue })),
}))

export default useStore
