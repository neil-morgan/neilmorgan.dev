// get-base64.test.ts
import { getPlaiceholder } from 'plaiceholder';
import { getBase64 } from './get-base64';

jest.mock('plaiceholder', () => ({
  getPlaiceholder: jest.fn(),
}));

describe('getBase64', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return base64 string on successful fetch and conversion', async () => {
    const mockImageUrl = 'https://example.com/image.jpg';
    const mockBase64 = 'mockBase64String';
    const mockBuffer = new ArrayBuffer(8);

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      arrayBuffer: jest.fn().mockResolvedValue(mockBuffer),
    } as unknown as Response);

    (getPlaiceholder as jest.Mock).mockResolvedValue({ base64: mockBase64 });

    const result = await getBase64(mockImageUrl);

    expect(result).toBe(mockBase64);
    expect(fetch).toHaveBeenCalledWith(mockImageUrl);
    expect(getPlaiceholder).toHaveBeenCalledWith(Buffer.from(mockBuffer));
  });

  it('should throw an error if fetch fails', async () => {
    const mockImageUrl = 'https://example.com/image.jpg';

    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    } as Response);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const result = await getBase64(mockImageUrl);

    expect(result).toBeUndefined();
    expect(fetch).toHaveBeenCalledWith(mockImageUrl);
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});