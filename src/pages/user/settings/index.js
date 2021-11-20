import Setting from '@/components/shared/Setting'
import PersonalInfo from '@/components/userpage/PersonalInfo'
import ProtectedPage from '@/components/shared/ProtectedPage'
const Settings = ({ children }) => {
  return (
    <ProtectedPage>
      <Setting>
        <PersonalInfo />
      </Setting>
    </ProtectedPage>
  )
}

export default Settings
