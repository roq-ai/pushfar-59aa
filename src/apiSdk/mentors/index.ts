import axios from 'axios';
import queryString from 'query-string';
import { MentorInterface, MentorGetQueryInterface } from 'interfaces/mentor';
import { GetQueryInterface } from '../../interfaces';

export const getMentors = async (query?: MentorGetQueryInterface) => {
  const response = await axios.get(`/api/mentors${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createMentor = async (mentor: MentorInterface) => {
  const response = await axios.post('/api/mentors', mentor);
  return response.data;
};

export const updateMentorById = async (id: string, mentor: MentorInterface) => {
  const response = await axios.put(`/api/mentors/${id}`, mentor);
  return response.data;
};

export const getMentorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/mentors/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMentorById = async (id: string) => {
  const response = await axios.delete(`/api/mentors/${id}`);
  return response.data;
};
