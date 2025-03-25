import axios from 'axios';
import Config from '../config/config';
import Utils from '../utils/utils';
import ApiEndpoint from '../config/api-endpoint';

const Story = {
  async getAll() {
    return await axios.get(ApiEndpoint.GET_ALL_STORY, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
  },

  async getById(id) {
    return await axios.get(ApiEndpoint.GET_BY_ID_STORY(id), {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
  },

  async store(formData) {
    const data = new FormData();
    data.append('description', formData.description);
    data.append('photo', formData.photo);
    if (formData.lat) {
      data.append('lat', formData.lat);
    }
    if (formData.lon) {
      data.append('lon', formData.lon);
    }

    return await axios.post(ApiEndpoint.STORE_STORY, data, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  async update({ id, description, photo, lat, lon }) {
    const data = new FormData();
    data.append('description', description);
    data.append('photo', photo);
    if (lat) {
      data.append('lat', lat);
    }
    if (lon) {
      data.append('lon', lon);
    }

    return await axios.put(ApiEndpoint.UPDATE_STORY(id), data, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  async destroy(id) {
    return await axios.delete(ApiEndpoint.DESTROY_STORY(id), {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
  },
};

export default Story;
