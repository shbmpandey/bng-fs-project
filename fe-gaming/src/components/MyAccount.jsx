import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MyAccount = () => {
  const { user, handleLogout} = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-2">
          My Account
        </h2>
        {user && (
          <p className="text-gray-300 mb-4">
            Welcome, {user.fullName || user.email}
          </p>
        )}
        
        

        <div className="space-y-3">
          <button className="w-full text-left bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg">
            Edit Profile
          </button>
          <button className="w-full text-left bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg">
            Change Password
          </button>
          <button className="w-full text-left bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg">
            Transaction History
          </button>
          <button 
            onClick={() => {
              handleLogout();
              navigate('/login');
            }}
            className="w-full text-left bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg mt-4"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;