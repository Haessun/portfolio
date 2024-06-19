import React from 'react';
import { FaCode, FaMusic, FaLanguage, FaHeart } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';

const AdditionalSkills = () => {
  return (
    <section className="mt-8">
      <SectionTitle>Additional Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="flex items-center font-semibold text-xl mb-2">
            <span className="mr-2 text-blue-500"><FaCode /></span> Programming
          </h4>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Python</strong> (PyTorch, Numpy & Pandas, Librosa)</li>
            <li><strong>C, C++, Java, Javascript</strong></li>
          </ul>
        </div>
        <div>
          <h4 className="flex items-center font-semibold text-xl mb-2">
            <span className="mr-2 text-green-500"><FaMusic /></span> Music
          </h4>
          <ul className="list-disc list-inside ml-4">
            <li><em>Classical Music Composition</em>, <em>Musicology</em>, <em>Piano</em></li>
          </ul>
        </div>
        <div>
          <h4 className="flex items-center font-semibold text-xl mb-2">
            <span className="mr-2 text-red-500"><FaLanguage /></span> Language
          </h4>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Korean</strong>: Native</li>
            <li><strong>English</strong>: Professional</li>
          </ul>
        </div>
        <div>
          <h4 className="flex items-center font-semibold text-xl mb-2">
            <span className="mr-2 text-pink-500"><FaHeart /></span> Interests
          </h4>
          <ul className="list-disc list-inside ml-4">
            <li><em>Acoustic, Classical, Electric and Bass Guitar Player</em></li>
            <li><em>Acapella Singer</em></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkills;