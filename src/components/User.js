import React from 'react';

// Assuming your JSON data is imported from a file or fetched from an API
import userData from '../User.json';

function User() {
  return (
    <section className="flex-grow p-4 overflow-auto">
      <h3 className="text-3xl text-gray-900 font-bold mb-4">
        User Lists
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 uppercase border-b">Name</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 uppercase border-b">Email</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 uppercase border-b">Phone</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 uppercase border-b">Address</th>
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 uppercase border-b">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userData.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 text-sm font-medium text-gray-900">{user.name}</td>
                <td className="py-2 px-4 text-sm text-gray-600">{user.email}</td>
                <td className="py-2 px-4 text-sm text-gray-600">{user.phone}</td>
                <td className="py-2 px-4 text-sm text-gray-600">{`${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}`}</td>
                <td className="py-2 px-4 text-sm text-gray-600">
                  <p className={`py-2 px-4 text-sm text-center ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {user.status}
                  </p>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default User;
