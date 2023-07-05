export const request = async (url: string, {body, method, headers}: any = {body: {}, method: 'get', headers: {}}) => {
  if (typeof window !== "undefined") {
    try {
      const response = await fetch(`https://ticketing.dev/${url}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method,
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.errors) {
        return { isError: true, errors: data.errors, data: null };
      } else {
        return { isError: false, data };
      }
    } catch (err: any) {
      return { isError: true, errors: [{message: err.message}], data: null };
    }
  } else {
    try {
      const response = await fetch(
        `http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/${url}`,
        {
          method,
          headers,
        }
      );
      const data = await response.json();
      if (data.errors) {
        return { isError: true, errors: data.errors, data: null };
      } else {
        return { isError: false, data };
      }
    } catch (err) {
      return { isError: true, errors: [], data: null };
    }
  }
};
