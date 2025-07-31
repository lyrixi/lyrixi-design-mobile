import Upload from './Upload'

import supportTypes from './utils/supportTypes'
import validateListStatus from './utils/validateListStatus'
import List from './Base/List'
import Button from './Base/Choose/Button'
import Uploading from './Base/Uploading'

Upload.supportTypes = supportTypes
Upload.validateListStatus = validateListStatus
Upload.List = List
Upload.Button = Button
Upload.Uploading = Uploading

export default Upload
