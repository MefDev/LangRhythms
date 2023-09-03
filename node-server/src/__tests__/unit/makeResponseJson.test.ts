import { makeResponseJson } from '@/helpers';

describe('makeResponseJson', () => {
  it('returns a Json object with the expected structure', () => {
    const res = makeResponseJson({ message: 'Test message' });
    expect(res).toMatchObject({
      status_code: 200,
      success: true,
      data: { message: 'Test message' },
    });
    expect(res.timestamp).toBeInstanceOf(Date);
    //Null data
    const nullDataRes = makeResponseJson(null);
    expect(nullDataRes).toMatchObject({
      status_code: 200,
      success: true,
      data: null,
    });

    // Empty data
    const emptyDataRes = makeResponseJson({});
    expect(emptyDataRes).toMatchObject({
      status_code: 200,
      success: true,
      data: {},
    });
  });
  it('allows custom success values', () => {
    const res = makeResponseJson({ message: 'Custom success value' }, false);
    expect(res.success).toBe(false);
  });
});
