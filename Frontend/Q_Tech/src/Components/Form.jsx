import { useState } from 'react';
import Navbar from './Navbar';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resumeUrl: '',
    coverNote: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submit logic here
    alert('Application submitted successfully!');
  };

  return (
    <>
    
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">Apply Now</h2>
          <p className="text-gray-400">Join our team and make an impact</p>
        </div>

        {/* Form Card */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20"
        >
          {/* Name Field */}
          <div className="mb-5">
            <label className="block text-white font-medium mb-2">
              Full Name <span className="text-pink-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label className="block text-white font-medium mb-2">
              Email Address <span className="text-pink-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>

          {/* Resume URL Field */}
          <div className="mb-5">
            <label className="block text-white font-medium mb-2">
              Resume Link / URL <span className="text-pink-500">*</span>
            </label>
            <input
              type="url"
              name="resumeUrl"
              value={formData.resumeUrl}
              onChange={handleChange}
              required
              placeholder="https://drive.google.com/your-resume"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
            <p className="text-gray-500 text-sm mt-1">
              Google Drive, Dropbox, or personal website link
            </p>
          </div>

          {/* Cover Note Field */}
          <div className="mb-6">
            <label className="block text-white font-medium mb-2">
              Cover Note <span className="text-pink-500">*</span>
            </label>
            <textarea
              name="coverNote"
              value={formData.coverNote}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
          >
            Submit Application →
          </button>

          {/* Footer Note */}
          <p className="text-center text-gray-500 text-sm mt-4">
            By applying, you agree to our Terms & Privacy Policy
          </p>
        </form>
      </div>
    </section>
    </>
  );
};

export default ApplyForm;