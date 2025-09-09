import Modal from './Modal'
import NavBar from './NavBar'
import NavBarCombo from './NavBarCombo'
import NavBarModal from './NavBarModal'
import DropdownCombo from './DropdownCombo'
import DropdownModal from './DropdownModal'
import SelectCombo from './SelectCombo'
import SelectModal from './SelectModal'

import FilterModal from './FilterModal'

import alert from './api/alert'
import confirm from './api/confirm'
import destroy from './api/destroy'
import getClassNameByAnimation from './api/getClassNameByAnimation'

// NavBar
Modal.NavBar = NavBar
Modal.NavBarCombo = NavBarCombo
Modal.NavBarModal = NavBarModal

// Dropdown
Modal.DropdownCombo = DropdownCombo
Modal.DropdownModal = DropdownModal

// Select base in NavBar
Modal.SelectCombo = SelectCombo
Modal.SelectModal = SelectModal

// Filter
Modal.FilterModal = FilterModal

// Js Api
Modal.alert = alert
Modal.confirm = confirm
Modal.destroy = destroy
Modal.getClassNameByAnimation = getClassNameByAnimation

export default Modal
