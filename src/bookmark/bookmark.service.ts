import { Delete, Get, Injectable, Patch, Post } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor() {}

  getBookmarks(userId: number) {}

  getBookmarkById(userId: number, bookmarkId: number) {}

  createBookmark(userId: number, dto: CreateBookmarkDto) {}

  editBookmarkById(userId: number, bookmarkId: number, dto: EditBookmarkDto) {}

  deleteBookmarkById(userId: number, bookmarkId: number) {}
}
