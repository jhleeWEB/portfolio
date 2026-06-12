import { NextRequest, NextResponse } from 'next/server';

const allowedVideoIds = new Set(['MVnvCQGwjdM', 'QYl1KoU_Npk']);

export async function GET(request: NextRequest) {
	const videoId = request.nextUrl.searchParams.get('id');

	if (!videoId || !allowedVideoIds.has(videoId)) {
		return NextResponse.json({ message: 'Invalid video id' }, { status: 400 });
	}

	const response = await fetch(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, {
		next: { revalidate: 86400 },
	});

	if (!response.ok) {
		return NextResponse.json({ message: 'Thumbnail not found' }, { status: response.status });
	}

	return new NextResponse(await response.arrayBuffer(), {
		headers: {
			'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
			'Content-Type': response.headers.get('content-type') ?? 'image/jpeg',
		},
	});
}
