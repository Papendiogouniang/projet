import React, { useEffect, useState } from 'react';

interface Course {
  _id: string;
  title: string;
  description?: string;
  contentUrl?: string;
}

const Elearning = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/courses', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
      } catch {
        setError('Erreur lors du chargement des cours.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-4">Chargement des cours...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cours disponibles</h1>
      {courses.length === 0 ? (
        <p>Aucun cours disponible pour le moment.</p>
      ) : (
        <ul className="space-y-4">
          {courses.map((course) => (
            <li key={course._id} className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              {course.description && <p className="mt-2">{course.description}</p>}
              {course.contentUrl && (
                <a
                  href={course.contentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  Accéder au contenu
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Elearning;
