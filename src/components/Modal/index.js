import Modal from './Modal'
import NavBarModal from './NavBarModal'
import DropdownCombo from './DropdownCombo'
import DropdownModal from './DropdownModal'

import FilterModal from './FilterModal'

import getClassNameByAnimation from './api/getClassNameByAnimation'

// NavBar
Modal.NavBarModal = NavBarModal

// Dropdown
Modal.DropdownCombo = DropdownCombo
Modal.DropdownModal = DropdownModal

// Filter
Modal.FilterModal = FilterModal

// Js Api
Modal.getClassNameByAnimation = getClassNameByAnimation

export default Modal
